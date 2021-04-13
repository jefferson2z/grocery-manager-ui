import { StyledLayoutContainer, StyledMainContentContainer } from './styles';
import { Sidebar } from '../../components/Sidebar';

export const Layout = ({ children }) => {
  return (
    <StyledLayoutContainer>
      <Sidebar />
      <StyledMainContentContainer>{children}</StyledMainContentContainer>
    </StyledLayoutContainer>
  );
};
