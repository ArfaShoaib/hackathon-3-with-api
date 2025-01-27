import { defineType } from "sanity"

export const dress = defineType({
    name: "dress",
    title: "Dress",
    type: "document",
    fields: [
        {
            name: "title",
            title: "Title",
            validation: (rule) => rule.required(),
            type: "string"
        },
        {
            name: "slug",
            title: "Slug",
            type: "slug",
            options: {
                source: "title",
                maxLength: 96, // Slug ki length limit
            },
            validation: (rule) => rule.required()
        },
        {
            name: "description",
            type: "text",
            validation: (rule) => rule.required(),
            title: "Description",
        },
        {
            name: "dressImage",
            type: "image",
            validation: (rule) => rule.required(),
            title: "Dress Image"
        },
        {
            name: "price",
            type: "number",
            validation: (rule) => rule.required(),
            title: "Price",
        },
        {
            name: "tags",
            type: "array",
            title: "Tags",
            of: [{ type: "string" }]
        },
        {
            name: "discountPercentage",
            type: "number",
            title: "Discount Percentage",
        },
        {
            name: "isNew",
            type: "boolean",
            title: "New Badge",
        },
        {
            name: "size",
            title: "Size",
            type: "array",
            of: [{ type: "string" }],
            options: {
                list: [
                    { title: "Small", value: "small" },
                    { title: "Medium", value: "medium" },
                    { title: "Large", value: "large" },
                    { title: "X-Large", value: "x-large" },
                ],
                // Ye options aapke dresses ke liye size options hain
            }
        },
        {
            name: "color",
            title: "Color",
            type: "string",
            validation: (rule) => rule.required(),
            description: "Color of the dress" // Additional description
        },
    ]
})