import { createClient } from "contentful";
import { useEffect, useState } from "react";

const client = createClient({
  space: "txmuuwsyc0p8",
  environment: "master",
  accessToken: "xLe5n-26A6cqjQkDiUvO07eimP7ItMeDdL43TLke6fQ",
});

export const useFetchProjects = () => {
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState([]);

  const getData = async () => {
    try {
      const response = await client.getEntries({ content_type: "projects" });
      console.log(response)
      const projects = response.items.map((item) => {
        const { title, url, image, github } = item.fields;
        const id = item.sys.id;
        const img = image?.fields?.file?.url;
        return { title, url, id, img, github};
      });
      setProjects(projects);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  return { loading, projects };
};