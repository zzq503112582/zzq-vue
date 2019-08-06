import Vue from 'vue'
import {
    
    TabPane,
    Tabs,
    Select,
    Option,
    Tree,
    Tag,
    MessageBox,
    Dialog,
    Pagination,
    Tooltip,
    Switch,
    Table,
    TableColumn,
    Row,
    Col,
    Card,
    Breadcrumb,
    BreadcrumbItem,
    Menu,
    Submenu,
    MenuItem,
    Button,
    Form,
    FormItem,
    Input,
    Message,
    Container,
    Header,
    Aside,
    Main,
    Alert,
    Cascader
} from 'element-ui'

Vue
    
    .use(TabPane)
    .use(TabPane)
    .use(Tabs)
    .use(Cascader)
    .use(Alert)
    .use(Select)
    .use(Option)
    .use(Tree)
    .use(Tag)
    .use(Dialog)
    .use(Pagination)
    .use(Tooltip)
    .use(Switch)
    .use(Table)
    .use(TableColumn)
    .use(Row)
    .use(Col)
    .use(Card)
    .use(Breadcrumb)
    .use(BreadcrumbItem)
    .use(Menu)
    .use(Submenu)
    .use(MenuItem)
    .use(Button)
    .use(Form).use(FormItem)
    .use(Input)
    .use(Container)
    .use(Header)
    .use(Aside)
    .use(Main)

Vue.prototype.$message = Message
Vue.prototype.$confirm = MessageBox.confirm