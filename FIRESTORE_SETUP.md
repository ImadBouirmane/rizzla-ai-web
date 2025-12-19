# Firestore Collection Setup Guide

This guide will help you set up the `website_data` collection in Firebase Firestore to store screenshots for the website.

## Collection Structure

The screenshots are stored in the following Firestore structure:

```
website_data (collection)
  └── screenshots (document)
      └── items (sub-collection)
          ├── screenshot1 (document)
          ├── screenshot2 (document)
          └── screenshot3 (document)
```

## Step-by-Step Setup

### 1. Open Firebase Console

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Select your project: **rizzla-ai**
3. Navigate to **Firestore Database** in the left sidebar

### 2. Create the Collection Structure

#### Step 2.1: Create the `website_data` Collection

1. Click **"Start collection"** (if Firestore is empty) or **"Add collection"**
2. Collection ID: `website_data`
3. Click **"Next"**

#### Step 2.2: Create the `screenshots` Document

1. Document ID: `screenshots`
2. Add a field (optional, just to create the document):
   - Field name: `created`
   - Type: `timestamp`
   - Value: `now`
3. Click **"Save"**

#### Step 2.3: Create the `items` Sub-collection

1. Click on the `screenshots` document you just created
2. Click **"Start collection"** button (this creates a sub-collection)
3. Collection ID: `items`
4. Click **"Next"**

### 3. Add Screenshot Documents

For each screenshot, create a document in the `items` sub-collection:

#### Document Fields

Each screenshot document should have the following fields:

| Field Name | Type | Required | Description |
|------------|------|----------|-------------|
| `title` | string | Yes | Title of the screenshot (e.g., "AI Chat Coach") |
| `description` | string | Yes | Description text shown below the screenshot |
| `imageUrl` | string | Yes | Full URL to the screenshot image (can be Firebase Storage URL or external URL) |
| `order` | number | No | Order for sorting (lower numbers appear first) |

#### Example Document 1

- **Document ID**: `screenshot-1` (or use auto-generated ID)
- **Fields**:
  ```
  title: "AI Chat Coach"
  description: "Interact with intelligent AI to guide your emotional journey"
  imageUrl: "https://your-domain.com/screenshots/chat-coach.png"
  order: 1
  ```

#### Example Document 2

- **Document ID**: `screenshot-2`
- **Fields**:
  ```
  title: "Message Generation"
  description: "Generate perfectly matched custom replies and messages"
  imageUrl: "https://your-domain.com/screenshots/message-gen.png"
  order: 2
  ```

#### Example Document 3

- **Document ID**: `screenshot-3`
- **Fields**:
  ```
  title: "Emotional Insights"
  description: "Track and understand your emotional connection patterns"
  imageUrl: "https://your-domain.com/screenshots/insights.png"
  order: 3
  ```

### 4. Upload Images to Firebase Storage (Optional)

If you want to store images in Firebase Storage:

1. Go to **Storage** in Firebase Console
2. Create a folder: `screenshots/`
3. Upload your screenshot images
4. For each image, click on it and copy the **Download URL**
5. Use this URL as the `imageUrl` value in your Firestore documents

### 5. Firestore Rules

The Firestore rules are already configured in `firestore.rules`:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /website_data/{document=**} {
      allow read: if true;  // Public read access
      allow write: if false; // No public write access
    }
  }
}
```

**Deploy the rules:**
```bash
firebase deploy --only firestore:rules
```

## Quick Setup Script

You can also use the Firebase Console's import feature or add documents programmatically. Here's a JSON structure you can use:

```json
{
  "website_data": {
    "screenshots": {
      "items": {
        "screenshot-1": {
          "title": "AI Chat Coach",
          "description": "Interact with intelligent AI to guide your emotional journey",
          "imageUrl": "https://your-domain.com/screenshots/chat-coach.png",
          "order": 1
        },
        "screenshot-2": {
          "title": "Message Generation",
          "description": "Generate perfectly matched custom replies and messages",
          "imageUrl": "https://your-domain.com/screenshots/message-gen.png",
          "order": 2
        },
        "screenshot-3": {
          "title": "Emotional Insights",
          "description": "Track and understand your emotional connection patterns",
          "imageUrl": "https://your-domain.com/screenshots/insights.png",
          "order": 3
        }
      }
    }
  }
}
```

## Testing

After adding the data:

1. The website will automatically fetch screenshots from Firestore
2. If Firestore is empty or unavailable, it will use fallback placeholder data
3. Check the browser console for any Firestore connection errors

## Troubleshooting

### Screenshots not showing?

1. Check browser console for errors
2. Verify Firestore rules are deployed: `firebase deploy --only firestore:rules`
3. Ensure the collection path is exactly: `website_data/screenshots/items`
4. Verify field names match exactly: `title`, `description`, `imageUrl`, `order`

### Firebase not initialized?

- The service will gracefully fall back to default screenshots
- To enable Firestore, ensure Firebase is properly configured in your project
- When deployed to Firebase Hosting, Firebase SDK auto-detects configuration

## Notes

- The `order` field is optional - if not provided, documents will appear in creation order
- Image URLs can be from Firebase Storage, external CDN, or any publicly accessible URL
- The service caches data and handles errors gracefully
