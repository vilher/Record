import React from 'react';
import Footer from './Footer';
import Header from './Header';
import Note from './Note';
import notes from './notes.js';


function App(){
return (<div>
<Header />
{notes.map(cons => <Note key={cons.id} title={cons.title} txt={cons.info}/>)}
<Footer />
</div>);
};
export default App;