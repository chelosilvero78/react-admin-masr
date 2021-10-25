import React from 'react';
import {Admin, Resource, ListGuesser, EditGuesser, fetchUtils} from 'react-admin';
import simpleRestProvider from 'ra-data-simple-rest';
import restProvider from 'ra-data-simple-rest';
import jsonServerProvider from 'ra-data-json-server';
import {UserList} from "./components/users";
import {PostCreate, PostEdit, PostList} from "./components/posts";
import authProvider from "./providers/authProvider";
//import { FirebaseAuthProvider,} from 'react-admin-firebase';
import GroupIcon from '@material-ui/icons/Group';
import PostAddIcon from '@material-ui/icons/PostAdd';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import {TodoCreate, TodoEdit, TodoList} from "./components/todos";
import PhotoAlbumIcon from '@material-ui/icons/PhotoAlbum';
import PhotoSizeSelectActualIcon from '@material-ui/icons/PhotoSizeSelectActual';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import {AlbumCreate, AlbumEdit, AlbumList} from "./components/albums";
import {PhotoCreate, PhotoEdit, PhotoList} from "./components/photos";
import {CommentEdit, CommentList,CommentCreate} from "./components/comments";

//connect the data provider to the REST endpoint

const config = {
    apiKey: "AIzaSyCZCP6iWIbx87FBUf-lh5NkpiMQ_llqbkA",
    authDomain: "aicoop-408.firebaseapp.com",
    databaseURL: "https://aicoop-408.firebaseio.com",
    projectId: "aicoop-408",
    storageBucket: "aicoop-408.appspot.com",
    messagingSenderId: "818418211083",
    appId: "1:818418211083:web:017508b23c890f6de66a0e"
};

const options = {
    // Use a different root document to set your resource collections, by default it uses the root collections of firestore
    // rootRef: 'root-collection/some-doc',
// Your own, previously initialized firebase app instance
//     app: firebaseAppInstance,
// Enable logging of react-admin-firebase
    logging: false,
// Resources to watch for realtime updates, will implicitly watch all resources by default, if not set.
//     watch: ['posts'],
// Resources you explicitly dont want realtime updates for
//     dontwatch: ['comments'],
}

const fetchJson = (url, options = {}) => {
    if (!options.headers) {
        options.headers = new Headers({ Accept: 'application/json' });
    }
    // add your own headers here
    options.headers.set('X-Custom-Header', 'foobar');
    return fetchUtils.fetchJson(url, options);
}


//const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');
const dataProvider =simpleRestProvider('http://localhost:3977/api/v1', fetchJson);
//const firebaseAuthProvider = FirebaseAuthProvider(config,options)

function App() {
    return (
        <Admin dataProvider={restProvider('http://localhost:3977/api/v1')} /*authProvider={firebaseAuthProvider}*/>
            <Resource name="get-users" list={UserList} icon={GroupIcon}/>
            <Resource name="get-posts" list={PostList} edit={PostEdit} create={PostCreate} icon={PostAddIcon}/>
            <Resource name="todos" list={TodoList} edit={TodoEdit} create={TodoCreate} icon={FormatListBulletedIcon}/>
            <Resource name="albums" list={AlbumList} edit={AlbumEdit} create={AlbumCreate} icon={PhotoAlbumIcon}/>
            <Resource name="photos" list={PhotoList} edit={PhotoEdit} create={PhotoCreate} icon={PhotoSizeSelectActualIcon}/>
            <Resource name="comments" list={CommentList} edit={CommentEdit} create={CommentCreate} icon={ChatBubbleIcon}/>
        </Admin>
    );
}

export default App;
