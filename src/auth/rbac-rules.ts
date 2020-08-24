export interface Rules {
    [key: string]: {
        static: string[];
        dynamic?: {
            [key: string]: (data: any) => boolean;
        }
    }
}

const rules: Rules = {
    visitor: {
      static: ["posts:list", "home-page:visit"]
    },
    writer: {
      static: [
        "posts:list",
        "posts:create",
        "users:getSelf",
        "home-page:visit",
        "dashboard-page:visit"
      ],
      dynamic: {
        "posts:edit": ({userId, postOwnerId}: { userId?: string, postOwnerId?: string}) => {
          if (!userId || !postOwnerId) return false;
          return userId === postOwnerId;
        }
      }
    },
    admin: {
      static: [
        "posts:list",
        "posts:create",
        "posts:edit",
        "posts:delete",
        "users:get",
        "users:getSelf",
        "home-page:visit",
        "dashboard-page:visit"
      ]
    }
  };
  
  export default rules;