import type { PageServerLoad } from './$types';
import { NOTION_API_TOKEN } from '$env/static/private';
// import type { DatabaseQueryResult } from '../../notion'

export const load: PageServerLoad = async ({ fetch }) => {
    const res = await fetch('https://api.notion.com/v1/databases/af658ede08454466bbdccde0318daeba/query', {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${NOTION_API_TOKEN}`,
            'Notion-Version': '2022-06-28'
        },
        body: JSON.stringify({})
    });


    const database = await res.json() as DatabaseQueryResult<{
        Category: Property_Select
        Nom: Property_Title
        "Sub-Category": Property_MultiSelect
        Visible: Property_Checkbox
        Description: Property_RichText
        Image: Property_Files
    }>

    const categories: { [key: string]: string[] } = {}
    const images: GalleryImage[] = []

    database.results.forEach(result => {
        // Generate categories

        const Category = result.properties.Category.select.name

        if (!Object.keys(categories).includes(Category)) {
            categories[Category] = []
        }


        const Subcategories = result.properties['Sub-Category'].multi_select.map(option => option.name)


        categories[Category] = categories[Category].concat(Subcategories)


        const image = result.properties.Image.files[0]
        const galleryImage: GalleryImage = {
            id: result.id,
            src: image.type == 'file' ? image.file.url : image.external.url,
            cat: Category,
            subcat: Subcategories,
            desc: richTextToNormalText(result.properties.Description.rich_text)
        }

        images.push(galleryImage)
    })


    return {
        categories,
        images,
        fullData: database
    };
};

const richTextToNormalText = (rts: RichText[]) => {
    return rts.reduce((p, rt) => p + rt.plain_text, "")
}