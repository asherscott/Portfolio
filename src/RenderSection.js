function RenderSection({ data }) {
  const { title, links, description, date, listItems } = data;

  const renderList = () =>
    listItems.map((item, idx) => <li key={idx}>{item}</li>);

  return (
    <section>
      <header>
        <h4>{title}</h4> {date && <span>{date}</span>}
      </header>

      {links && (
        <ul>
          <li>
            <a>{links.github}</a>
          </li>
          <li>
            <a>{links.website}</a>
          </li>
          <li>
            <a>{links.demo}</a>
          </li>
        </ul>
      )}

      <p>{description}</p>

      {listItems && <ul>{renderList()}</ul>}
    </section>
  );
}

export default RenderSection;
