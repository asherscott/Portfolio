function RenderSection({ data }) {
  const { title, links, description, date, listItems } = data;

  const renderList = () =>
    listItems.map((item, idx) => <li key={idx}>{item}</li>);

  return (
    <section>
      <header className="item-head">
        <h4>{title}</h4> {date && <span>{date}</span>}
      </header>

      {links && (
        <ul className="nav-ul links-ul">
          {links.github && (
            <li>
              <a href={links.github}>Github</a>
            </li>
          )}

          {links.website && <span>|</span>}

          {links.website && (
            <li>
              <a href={links.website}>Website</a>
            </li>
          )}

          {links.demo && <span>|</span>}

          {links.demo && (
            <li>
              <a href={links.demo}>Demo</a>
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
