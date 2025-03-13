// Facebook/Instagram webhook entry
export interface WebhookEntry {
    id: string;
    time: number;
    changes?: Array<{
        field: string;
        value: any;
    }>;
    messaging?: Array<any>;
}

// Facebook/Instagram webhook payload
export interface WebhookPayload {
    object: string;
    entry: WebhookEntry[];
}

// Comment mention data
export interface MentionData {
    platform: 'facebook' | 'instagram';
    postId: string;
    postUrl?: string;
    postContent?: string;  // Added to store the content of the original post
    commentId: string;
    commentText: string;
    taggerId: string;
    taggerName?: string;
    taggerUsername?: string;
    taggerProfilePicUrl?: string;  // Added to store profile picture if available
    timestamp: number;
}

// Notification content
export interface NotificationContent {
    title: string;
    body: string;
    url?: string;
}