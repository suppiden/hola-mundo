import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'


export function App (){ 
   return (
    <section className='App'>
   <TwitterFollowCard initialIsFollowing userName="SeñorRosaFosforito" name="Señor Rosa" />
   <TwitterFollowCard initialIsFollowing userName="mrPink" name="mrPink" />
   <TwitterFollowCard initialIsFollowing={false} userName="midudev" name="midu" />
   <TwitterFollowCard initialIsFollowing={false} userName="suppiden" name="Yo" />
   <TwitterFollowCard initialIsFollowing  userName="andreugolfe" name="andreu" />
   <TwitterFollowCard initialIsFollowing={false} userName="saroltacc" name="Sarol" />
</section>
   )
} 