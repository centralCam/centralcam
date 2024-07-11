import SearchBase from "./SearchBase";

const SearchAdmin = () => (
    <SearchBase
      inputClassName="bg-gray-50 border border-gray-300 text-gray-900 focus:ring-primary-500 focus:border-primary-500"
      buttonClassName="bg-boton-primary hover:bg-boton-primary-hover active:bg-boton-primary-active"
      placeholder="Buscar..."
    />
  );
  
  export default SearchAdmin;