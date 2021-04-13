import { StyledSidebarContainer } from './styles';

export const Sidebar = ({ children }) => {
  return (
    <StyledSidebarContainer>
      <nav>
        <h2 className="page-link">Home</h2>
      </nav>
    </StyledSidebarContainer>
  );
};
