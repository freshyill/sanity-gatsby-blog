import { format } from "date-fns";

export default {
  "name": "event",
  "type": "document",
  "title": "Event",
  "fields": [
    {
      "name": "title",
      "type": "string",
      "title": "Title",
      "description": "Description goes here…"
    },
    {
      "name": "slug",
      "type": "slug",
      "title": "Slug",
      "description": "Description…",
      "options": {
        "source": "title",
        "maxLength": 100
      }
    },
    {
      "name": "publishedAt",
      "type": "datetime",
      "title": "Publish Time",
      "description": "Set the time to now to appear immediately, or in the future to schedule it."
    },
    {
      "name": "mainImage",
      "type": "mainImage",
      "title": "Main Image",
      "description": "Main image for this event. Appears on the event itself."
    },
    {
      name: "body",
      type: "bodyPortableText",
      title: "Body",
    },
  ],
  orderings: [
    {
      name: "publishingDateAsc",
      title: "Publishing date new–>old",
      by: [
        {
          field: "publishedAt",
          direction: "asc",
        },
        {
          field: "title",
          direction: "asc",
        },
      ],
    },
    {
      name: "publishingDateDesc",
      title: "Publishing date old->new",
      by: [
        {
          field: "publishedAt",
          direction: "desc",
        },
        {
          field: "title",
          direction: "asc",
        },
      ],
    },
  ],
  preview: {
    select: {
      title: "title",
      publishedAt: "publishedAt",
      slug: "slug",
      media: "mainImage",
    },
    prepare({ title = "No title", publishedAt, slug = {}, media }) {
      const dateSegment = format(new Date(publishedAt), "yyyy/MM");
      const path = `/${dateSegment}/${slug.current}/`;
      return {
        title,
        media,
        subtitle: publishedAt ? path : "Missing publishing date",
      };
    },
  },
}
