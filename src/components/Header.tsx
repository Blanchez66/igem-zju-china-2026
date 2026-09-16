import "./Header.css";

interface HeaderProps {
  title: string;
  lead: string;
  columnClassName?: string;
}

export function Header({ title, lead, columnClassName = "col-lg-12" }: HeaderProps) {
  return (
    <header className="header py-5 mb-5">
      <div className="container h-100">
        <div className="row h-100 align-items-center">
          <div className={columnClassName}>
            <h1 className="display-4 text-black mt-5 mb-2">{title}</h1>
            <p className="lead mb-5 text-black-50">{lead}</p>
          </div>
        </div>
      </div>
    </header>
  );
}
