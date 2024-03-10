import { createClient } from "contentful";

const client = createClient({
  space: "fba3hjv1k34o",
  accessToken: "OG8cgVNX7v5apUXzFJU_BGXBaqobxAU3K33zE_-mPFo",
});

export const getWebshopData = async () => {
  try {
    const response = await client.getEntries({ content_type: "webshop" });
    const data = response.items.map((item) => {
      return item.fields;
    });

    return data;
  } catch (error) {
    //console.log(error);
  }
};
