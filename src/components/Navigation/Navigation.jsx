import { NavLink } from 'react-router-dom';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react';

export const Navigation = () => {
  return (
    <Breadcrumb separator="" fontWeight={500} color='white'>
      <BreadcrumbItem>
        <BreadcrumbLink _activeLink= {{color:'green.400'}} to="/" as={NavLink}>
          Home
        </BreadcrumbLink>
      </BreadcrumbItem>
      {/* <NavLink to='/'>Home</NavLink> */}

      <BreadcrumbItem>
        <BreadcrumbLink _activeLink= {{color:'green.400'}} to="/contacts" as={NavLink}>
          Contacts
        </BreadcrumbLink>
      </BreadcrumbItem>
      {/* <NavLink to='/contacts'>Contacts</NavLink> */}
    </Breadcrumb>
  );
};
