export declare class NotificationContentDto {
    title: string;
    body: string;
}
export declare class NotificationDataDto {
    route: string;
}
export declare class NotificationDto {
    id?: string;
    token: string;
    notification: NotificationContentDto;
    data: NotificationDataDto;
}
