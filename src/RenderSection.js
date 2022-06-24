function RenderSection({ data, darkTheme }) {
  const { title, links, description, date, listItems } = data;

  const renderList = () =>
    listItems.map((item, idx) => <li key={idx}>{item}</li>);

  return (
    <section>
      <header className="item-head">
        <h4 className={darkTheme ? "" : "light"}>{title}</h4>
        {date && <span>{date}</span>}
      </header>

      {links && (
        <ul className="links-ul">
          {links.github && (
            <li>
              <a href={links.github} className={darkTheme ? "" : "light"}>
                Github
              </a>
            </li>
          )}

          {links.website && <span>|</span>}

          {links.website && (
            <li>
              <a href={links.website} className={darkTheme ? "" : "light"}>
                Website
              </a>
            </li>
          )}

          {links.demo && <span>|</span>}

          {links.demo && (
            <li>
              <a href={links.demo} className={darkTheme ? "" : "light"}>
                Demo
              </a>
            </li>
          )}
        </ul>
      )}

      <p>{description}</p>

      {listItems && <ul>{renderList()}</ul>}
    </section>
  );
}

export default RenderSection;
