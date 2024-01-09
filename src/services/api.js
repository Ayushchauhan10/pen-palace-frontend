const BASE_URL = process.env.REACT_APP_BASE_URL

export const endpoints = {
    SIGNUP_API: BASE_URL + "/register",
    LOGIN_API: BASE_URL + "/login",
    PROFILE_API: BASE_URL + "/userProfile",
    BLOG_API: BASE_URL + "/userBlog",
    ALL_BLOG_API: BASE_URL + "/getAllBlog",
    COMMENT_API: BASE_URL + "/userComment",
    LIKE_API: BASE_URL + "/userLike",
    VIEW_BLOG: BASE_URL + "/viewBlog",
    LIKE_A_BLOG_API: BASE_URL + '/likeBlog',
    DISLIKE_A_BLOG_API: BASE_URL + '/dislikeBlog',
    CREATE_BLOG_API: BASE_URL + '/createBlog',
    UPDATE_BLOG_API: BASE_URL + '/updateBlog',
    DELETE_BLOG_API: BASE_URL + '/deleteBlog',
    UPLOAD_THUMBNAIL_API: BASE_URL + '/uploadThumbnail',
    CREATE_COMMENT_API: BASE_URL + '/createComment',
    EDIT_COMMENT_API: BASE_URL + '/editComment',
    DELETE_COMMENT_API: BASE_URL + '/deleteComment',
    UPDATE_PROFILE_API: BASE_URL + '/updateProfile',
    UPDATE_PASSWORD_API: BASE_URL + '/updatePassword',
    UPDATE_PROFILE_PHOTO_API: BASE_URL + '/updateProfilePhoto',
    GET_AUTHOR_PROFILE_API: BASE_URL + '/authorProfile',
    ALL_AUTHOR_API: BASE_URL + '/getAllAuthor',
};

