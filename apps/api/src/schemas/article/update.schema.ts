import * as yup from 'yup';

const updateArticleSchema = yup.object().shape({
  featured: yup.boolean(),
  title: yup.string(),
  url: yup.string(),
  imageUrl: yup.string(),
  newsSite: yup.string(),
  summary: yup.string(),
  publishedAt: yup.string(),
  launches: yup.array().of(
    yup.object().shape({
      id: yup.string().required(),
      provider: yup.string().required(),
    })
  ),
  events: yup.array().of(
    yup.object().shape({
      id: yup.string().required(),
      provider: yup.string().required(),
    })
  ),
});

export default updateArticleSchema;
