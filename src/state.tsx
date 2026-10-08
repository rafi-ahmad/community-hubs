import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import { communities, events, resources, members, type Community } from './data';
type State = { user:any; setUser:(v:any)=>void; joined:string[]; setJoined:(v:string[])=>void; attending:string[]; setAttending:(v:string[])=>void; saved:string[]; setSaved:(v:string[])=>void; created:Community[]; setCreated:(v:Community[])=>void; posts:any[]; setPosts:(v:any[])=>void; replies:Record<string,string[]>; setReplies:(v:Record<string,string[]>)=>void; dark:boolean; setDark:(v:boolean)=>void };
const Ctx=createContext<State|null>(null);
const get=(k:string,f:any)=>{try{return JSON.parse(localStorage.getItem(`hubs-${k}`)??'null')??f}catch{return f}};
export function Provider({children}:{children:ReactNode}) {
 const [user,setUser]=useState<any>(()=>get('user',null));
 const [joined,setJoined]=useState<string[]>(()=>get('joined',[]));
 const [attending,setAttending]=useState<string[]>(()=>get('attending',[]));
 const [saved,setSaved]=useState<string[]>(()=>get('saved',[]));
 const [created,setCreated]=useState<Community[]>(()=>get('created',[]));
 const [posts,setPosts]=useState<any[]>(()=>get('posts',[]));
 const [replies,setReplies]=useState<Record<string,string[]>>(()=>get('replies',{}));
 const [dark,setDark]=useState<boolean>(()=>get('dark',false));
 useEffect(()=>{localStorage.setItem('hubs-user',JSON.stringify(user));},[user]);
 useEffect(()=>{localStorage.setItem('hubs-joined',JSON.stringify(joined));},[joined]);
 useEffect(()=>{localStorage.setItem('hubs-attending',JSON.stringify(attending));},[attending]);
 useEffect(()=>{localStorage.setItem('hubs-saved',JSON.stringify(saved));},[saved]);
 useEffect(()=>{localStorage.setItem('hubs-created',JSON.stringify(created));},[created]);
 useEffect(()=>{localStorage.setItem('hubs-posts',JSON.stringify(posts));},[posts]);
 useEffect(()=>{localStorage.setItem('hubs-replies',JSON.stringify(replies));},[replies]);
 useEffect(()=>{localStorage.setItem('hubs-dark',JSON.stringify(dark));document.documentElement.classList.toggle('dark',dark);},[dark]);
 // Keep seeded data in module imports available to explain local demo state.
 void communities; void events; void resources; void members;
 return <Ctx.Provider value={{user,setUser,joined,setJoined,attending,setAttending,saved,setSaved,created,setCreated,posts,setPosts,replies,setReplies,dark,setDark}}>{children}</Ctx.Provider>
}
export function useHub(){const value=useContext(Ctx);if(!value)throw new Error('useHub must be within Provider');return value}
