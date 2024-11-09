/* eslint-disable no-undef */



<ul className="navbar-nav" ref={menuRef}>
  {icons.map((icon, index) => (
    <li key={index} className={`menu__item ${activeIndex === index ? 'active' : ''}`}
        style={{ '--bgColorItem': bgColorsBody[index] }}
        onClick={() => clickItem(index)}>
      <a href={["#top", "#about", "#portfolio", "#contact"][index]}>
        <img src={icon} alt={`Icon ${index + 1}`} />
      </a>
    </li>
  ))}
  <div className="menu__border" ref={borderRef}></div>
</ul>



