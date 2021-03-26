export interface Project {
  name: string
  test: string
  staging: string
  demo?: string
  prod: string
  swagger?: string
  onLine?: Boolean
}

const projects: Array<Project> = [
  {
    name: '供端平台',
    test: 'https://epro.test.viewchain.net/#/login',
    staging: 'https://epro.staging.viewchain.net/#/login',
    demo: 'https://epro.demo.viewchain.net/#/login',
    prod: 'https://ecp.vhepro.com/#/home',
  },
  { name: 'SaaS院端', test: '', staging: '', demo: '', prod: '' },
  { name: '华西采购', test: '', staging: '', demo: '', prod: '' },
  { name: '华西集采', test: '', staging: '', demo: '', prod: '' },
  { name: '贵阳中医第一附属医院', test: '', staging: '', demo: '', prod: '' },
  { name: '贵州第二人民医院', test: '', staging: '', demo: '', prod: '' },
  { name: '安徽省立医院', test: '', staging: '', demo: '', prod: '' },
  { name: '广东省中医', test: '', staging: '', demo: '', prod: '' },
  { name: '北京大学第一医院', test: '', staging: '', demo: '', prod: '' },
]

export default projects
