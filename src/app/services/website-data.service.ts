import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Screenshot {
  id?: string;
  title: string;
  description: string;
  imageUrl: string;
  order?: number;
}

@Injectable({
  providedIn: 'root'
})
export class WebsiteDataService {
  private firestore: any = null;

  constructor() {
    this.initFirebase();
  }

  private async initFirebase() {
    try {
      // Dynamically import Firebase
      const firebaseApp = await import('firebase/app');
      const firestoreModule = await import('firebase/firestore');
      
      // Check if Firebase is already initialized (auto-detected when deployed)
      const { getApps, initializeApp } = firebaseApp;
      const { getFirestore } = firestoreModule;
      
      let app;
      const apps = getApps();
      if (apps.length > 0) {
        app = apps[0];
      } else {
        // Try to initialize with empty config (will use auto-config if available)
        try {
          app = initializeApp({});
        } catch (e) {
          // Firebase not configured, will use fallback
          return;
        }
      }
      
      this.firestore = getFirestore(app);
    } catch (error) {
      // Firebase not available, will use fallback data
      console.log('Firebase not configured, using fallback screenshots');
    }
  }

  getScreenshots(): Observable<Screenshot[]> {
    return new Observable(observer => {
      // Wait a bit for Firebase to initialize
      setTimeout(() => {
        if (!this.firestore) {
          // Return empty array - component will use fallback data
          observer.next([]);
          observer.complete();
          return;
        }

        try {
          const { collection, getDocs } = require('firebase/firestore');
          const screenshotsRef = collection(this.firestore, 'website_data', 'screenshots', 'items');
          
          getDocs(screenshotsRef)
            .then((querySnapshot: any) => {
              const screenshots: Screenshot[] = [];
              querySnapshot.forEach((doc: any) => {
                screenshots.push({
                  id: doc.id,
                  ...doc.data()
                } as Screenshot);
              });
              screenshots.sort((a, b) => (a.order || 0) - (b.order || 0));
              observer.next(screenshots);
              observer.complete();
            })
            .catch((error: any) => {
              console.error('Error fetching screenshots:', error);
              observer.next([]);
              observer.complete();
            });
        } catch (error) {
          console.error('Error accessing Firestore:', error);
          observer.next([]);
          observer.complete();
        }
      }, 100);
    });
  }
}
