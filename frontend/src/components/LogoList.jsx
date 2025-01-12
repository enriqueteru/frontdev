export const LogoList = () => {
  return (
    <div className="mt-36 lg:mt-44">
      <p className="font-display text-base text-slate-900">
        Algunas de las empresas que confían en nosotros
      </p>
      <ul
        role="list"
        className="mt-8 flex flex-wrap items-center justify-center gap-8 sm:flex-col sm:gap-y-10 xl:flex-row xl:gap-12"
      >
        <li>
          <img
            alt="Transistor"
            src="/src/assets/transistor.svg"
            className="h-12"
          />
        </li>
        <li>
          <img alt="Tuple" src="/src/assets/tuple.svg" className="h-12" />
        </li>
        <li>
          <img
            alt="StaticKit"
            src="/src/assets/statickit.svg"
            className="h-12"
          />
        </li>
        <li>
          <img alt="Mirage" src="/src/assets/mirage.svg" className="h-12" />
        </li>
        <li>
          <img alt="Laravel" src="/src/assets/laravel.svg" className="h-12" />
        </li>
        <li>
          <img alt="Statamic" src="/src/assets/statamic.svg" className="h-12" />
        </li>
      </ul>
    </div>
  );
};
