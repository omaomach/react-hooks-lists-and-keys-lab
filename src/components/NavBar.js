import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const linkItems = links.map((link) => {
    return <li key={link} style={{listStyleType: "none"}}>#{link}</li>
  })
  console.log(linkItems)

  return <nav>
    {links.map((link) => {
    return (
      <a key={link} href={"#" + link}>{link}</a>
    )
    })}
    </nav>;
}

export default NavBar;
