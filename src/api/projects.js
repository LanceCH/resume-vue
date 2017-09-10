import fetch from '../utils/fetch';

export default function getProjects() {
  return fetch({
    url: 'project',
    method: 'get',
  });
}
