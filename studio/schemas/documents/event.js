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
      "name": null,
      "type": null,
      "title": null,
      "description": null
    }
  ]
}
