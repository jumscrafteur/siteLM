declare global {

    interface Database {
        id: string

        created_time: string
        created_by: User

        last_edited_time: string
        last_edited_by: User

        title: RichText[]
        description: RichText[]
        icon: File | Emoji
        cover: File_External

        properties: { [key: string]: Property }
        parent: Parent

        url: string
        archived: boolean
        is_inline: boolean
        public_url?: string
    }

    interface User {
        id: string
        type?: "person" | "bot"
        name?: string
        avatar_url?: string
    }

    type RichText = (RichText_Text | RichText_Equation) & {
        annotations: {
            bold: boolean
            italic: boolean
            strikethrough: boolean
            underline: boolean
            code: boolean
            color: NotionColors
        }
        plain_text: string
        href?: string
    }

    export type NotionColors = "blue" | "blue_background" | "brown" | "brown_background" | "default" | "gray" | "gray_background" | "green" | "green_background" | "orange" | "orange_background" | "pink" | "pink_background" | "purple" | "purple_background" | "red" | "red_background" | "yellow" | "yellow_background"

    interface RichText_Text {
        type: "text"
        text: {
            content: string
            link?: {
                url: string
            }
        }

    }

    interface RichText_Equation {
        type: "equation"
        equation: {
            expression: string
        }

    }

    type File = File_NotionHosted | File_External

    interface File_NotionHosted {
        type: "file"
        file: {
            url: string
            expiry_time: string
        }

    }

    interface File_External {
        type: "external"
        external: {
            url: string
        }

    }

    interface Emoji {
        type: "emoji"
        emoji: string
    }

    type Parent = Parent_Database | Parent_Page | Parent_Workspace | Parent_Block

    interface Parent_Database {
        type: "database_id"
        database_id: string
    }

    interface Parent_Page {
        type: "page_id"
        page_id: string
    }

    interface Parent_Workspace {
        type: "workspace"
        workspace: boolean
    }

    interface Parent_Block {
        type: "block_id"
        block_id: boolean
    }

    interface DatabaseQueryResult<Properties> {
        results: Page<Properties>[]
        next_cursor?: string
        has_more: boolean
    }

    interface Page<Properties> {
        id: string

        created_time: string
        created_by: User

        last_edited_time: string
        last_edited_by: User

        archived: boolean

        icon: File | Emoji
        cover: File_External

        properties: Properties

        parent: Parent

        url: string
        public_url?: string

    }


    // + checkbox
    // ? created_by
    // ? created_time
    // + date
    // + email
    // + files
    // + formula
    // + last_edited_by
    // + last_edited_time
    // + multi_select
    // + number
    // + people
    // + phone_number
    // + relation
    // - rollup
    // + rich_text
    // + select
    // + status
    // + title
    // + url
    // + unique_id
    // + verification

    type Property =
        (Property_Checkbox |
            Property_Date |
            Property_Email |
            Property_Files |
            Property_Formula |
            Property_LastEditedBy |
            Property_LastEditedTime |
            Property_MultiSelect |
            Property_Number |
            Property_People |
            Property_PhoneNumber |
            Property_Relation |
            Property_RichText |
            Property_Select |
            Property_Status |
            Property_Title |
            Property_Url |
            Property_UID |
            Property_Verification) & {
                id: string
            }

    interface Property_Checkbox {
        type: "checkbox"
        checkbox: boolean
    }

    interface Property_Date {
        type: "date"
        checkbox: {
            start?: string
            end?: string
            time_zone?: string
        }
    }

    interface Property_Email {
        type: "email"
        email: string
    }

    interface Property_Files {
        type: "files"
        files: File[]
    }

    interface Property_Formula {
        type: "formula"
        formula: boolean | {
            start: string
            end?: string
        } | number | string
    }

    interface Property_LastEditedBy {
        type: "last_edited_by"
        last_edited_by: User
    }

    interface Property_LastEditedTime {
        type: "last_edited_time"
        last_edited_time: string
    }

    interface Property_MultiSelect {
        type: "multi_select"
        name: string
        multi_select: NotionSelectOption[]
    }

    export type NotionSelectOption = {
        id: string
        name: string
        color: NotionColors
    }


    interface Property_Number {
        type: "number"
        name: string
        number: number
    }

    interface Property_People {
        type: "people"
        people: User[]
    }

    interface Property_PhoneNumber {
        type: "phone_number"
        name: string,
        phone_number: string
    }

    interface Property_Relation {
        type: "relation"
        relation: {
            id: string
        }
        has_more?: boolean
    }

    interface Property_RichText {
        type: "rich_text"
        rich_text: RichText[]
    }

    interface Property_Select {
        type: "select"
        select: NotionSelectOption
    }

    interface Property_Status {
        type: "status"
        status: NotionSelectOption
    }

    interface Property_Title {
        type: "title"
        title: RichText[]
    }

    interface Property_Url {
        type: "url"
        url: string
    }

    interface Property_UID {
        type: "unique_id"
        unique_id: {
            number: number
            prefix?: string
        }
    }

    interface Property_Verification {
        type: "verification"
        verification: {
            state: "verified"
            verified_by: User
            date: {
                start: string
                end?: string
            }
        } | {
            state: "unverified"
        }
    }



    interface GalleryImage {
        id: string
        src: string
        cat: string
        subcat: string[]
        desc: string
    }
}

export { };