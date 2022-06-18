import React from 'react';
import Footer from './Footer';
import Header from './Header';
import Note from './Note';

function App(){
return (<div>
<Header />
{Note("Summer","Good to see you")};
{Note("Buy","Mocolada")};
<Footer />
</div>);
};
export default App;