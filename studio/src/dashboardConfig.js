export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "60d24a8ca5f6e300ab3702d5",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-2dhppiyk",
                  apiId: "92f973c7-1ef7-447b-a941-677a03e31b93",
                },
                {
                  buildHookId: "60d24a8c7631d300bd1b3905",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-uauipb2t",
                  apiId: "0bb46a3b-0677-42fb-92cc-425aa6bc7ea1",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/freshyill/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-uauipb2t.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
