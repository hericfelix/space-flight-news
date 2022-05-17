import * as yup from 'yup';

const createArticleSchema = yup.object().shape({
  featured: yup.boolean().required(),
  title: yup.string().required(),
  url: yup.string().required(),
  imageUrl: yup.string().required(),
  newsSite: yup.string().required(),
  summary: yup.string().required(),
  publishedAt: yup.string().required(),
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

export default createArticleSchema;
