export interface User {
    username?: string
    email: string
    password: string
    repassword?: string
}

export interface Tag {
    id: number
    NAME: string
}

export interface Post {
    id: number
    author_id: number
    title: string
    summary: string
    content: string
    html: string
    cover_url: string
    view_count: number
    created_at: string
    updated_at: string
    post_tags: Tag[]
}
