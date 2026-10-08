import { useState } from 'react';
import type { ReactNode, FormEvent } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { Menu, Search, Sun, Moon, X, ArrowUpRight, CircleUserRound } from 'lucide-react';
import { useHub } from './state';
export function Shell({children}:{children:ReactNode}) {
 const [open,setOpen]=useState(false); const [term,setTerm]=useState(''); const {user,setUser,dark,setDark}=useHub();const navigate=useNavigate();
 const links=[['Discover','/communities'],['Events','/events'],['Stories','/news'],['Resources','/resources'],['People','/members'],['About','/about']];
 function search(e:FormEvent){e.preventDefault();navigate(`/search?q=${encodeURIComponent(term)}`);setOpen(false)}
 return <div className="site-frame">
  <div className="utility"><span>COMMUNITY HUBS <b>·</b> A network for people, everywhere</span><span className="utility-right"><Link to="/countries">Explore by country <ArrowUpRight size={13}/></Link><span className="language">EN</span></span></div>
  <header className="main-header">
   <Link className="wordmark" to="/" aria-label="Community Hubs home"><span className="mark">ch</span><span>community<span className="wordmark-light">hubs</span></span></Link>
   <nav className="desktop-nav" aria-label="Main navigation">{links.map(([n,p])=><NavLink key={p} to={p} className={({isActive})=>isActive?'nav-item active':'nav-item'}>{n}</NavLink>)}</nav>
   <div className="header-actions"><form className="search-form" onSubmit={search}><Search size={16}/><input aria-label="Search community hubs" data-testid="input-global-search" placeholder="Search" value={term} onChange={e=>setTerm(e.target.value)}/><button aria-label="Submit search" data-testid="button-global-search"><ArrowUpRight size={14}/></button></form>
    <button className="icon-button theme-toggle" aria-label={dark?'Use light theme':'Use dark theme'} data-testid="button-theme-toggle" onClick={()=>setDark(!dark)}>{dark?<Sun size={18}/>:<Moon size={18}/>}</button>
    {user?<div className="account-actions"><Link className="profile-chip" to="/profile"><span className="mini-avatar">{user.name?.[0]||'M'}</span><span>{user.name?.split(' ')[0]||'Profile'}</span></Link><button className="text-button" onClick={()=>setUser(null)} data-testid="button-sign-out">Sign out</button></div>:<Link to="/login" className="login-link"><CircleUserRound size={17}/> Sign in</Link>}
    <button className="mobile-toggle icon-button" data-testid="button-mobile-menu" aria-label={open?'Close menu':'Open menu'} onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button>
   </div>
  </header>
  {open&&<div className="mobile-menu"><nav>{links.map(([n,p])=><NavLink onClick={()=>setOpen(false)} key={p} to={p}>{n}</NavLink>)}<NavLink onClick={()=>setOpen(false)} to="/get-involved">Get involved</NavLink><NavLink onClick={()=>setOpen(false)} to="/login">Sign in / Register</NavLink></nav><form className="mobile-search" onSubmit={search}><input value={term} onChange={e=>setTerm(e.target.value)} placeholder="Search the network" aria-label="Search the network"/><button className="button button-dark">Search</button></form></div>}
  <main>{children}</main>
  <footer className="footer"><div className="footer-top"><div><Link className="wordmark footer-brand" to="/"><span className="mark">ch</span><span>community<span className="wordmark-light">hubs</span></span></Link><p>Good things happen when people find one another.</p></div><div className="footer-links"><div><b>Explore</b><Link to="/communities">Communities</Link><Link to="/events">Events</Link><Link to="/members">People</Link><Link to="/countries">Countries</Link></div><div><b>Take part</b><Link to="/get-involved">Get involved</Link><Link to="/create-community">Start a community</Link><Link to="/resources">Resources</Link><Link to="/news">Stories</Link></div><div><b>About</b><Link to="/about">Our network</Link><Link to="/contact">Contact</Link><Link to="/register">Create an account</Link></div></div></div><div className="footer-bottom"><span>© 2025 Community Hubs Network</span><span>People-first. Place-aware. Open to all.</span></div></footer>
 </div>
}
