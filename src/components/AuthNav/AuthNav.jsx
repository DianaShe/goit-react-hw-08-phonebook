import { NavLink } from 'react-router-dom';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from '@chakra-ui/react';

export default function AuthNav() {
  return (
    <Breadcrumb separator="" fontWeight={500} color='white'>
      <BreadcrumbItem>
        <BreadcrumbLink _activeLink= {{color:'green.400'}} to="/login" as={NavLink}>
          Log In
        </BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem>
        <BreadcrumbLink _activeLink= {{color:'green.400'}} to="/register" as={NavLink}>
          Register
        </BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>
  );
}
