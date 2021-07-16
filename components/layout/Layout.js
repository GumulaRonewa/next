import MainNavigation from './MainNavigation';
import classes from './Layout.module.css';

function Layout(props) {
  return (
    <div className="divide-y divide-fuchsia-300" >
      <MainNavigation style={{zIndex:1}}/>
      <main className={classes.main} style={{zIndex:1}}>{props.children}</main>
    </div>
  );
}

export default Layout;