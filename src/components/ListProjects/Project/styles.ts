import styled, { css } from 'styled-components'

interface ProjectPros {
  hasLink_web: boolean
}

export const ImageContainer = styled.div`
  width: 100%;
  position: relative;

  img {
    object-fit: cover;
    transition: all 0.3s ease-in;
  }
  svg {
    position: absolute;
    top: 1rem;
    right: 1rem;
    z-index: 1;
    color: #fff;
    font-size: 2rem;
    transition: all 0.5s ease-in;
  }
  a {
    font-size: ${({ theme }) => theme.textSizes['title-title-m']};
    color: white;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 11rem;
    opacity: 0;
    transition: all 0.5s ease-in-out;
  }
`

export const ProjectContainer = styled.li<ProjectPros>`
  width: 100%;
  max-width: 20rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  cursor: pointer;
  transition: all 0.2s ease-in;

  background: ${({ theme }) => theme.colors['base-post']};
  border-radius: 10px;
  overflow: hidden;
  ${(props) =>
    props.hasLink_web &&
    css`
      &:hover {
        transform: translateY(-1rem);

        ${ImageContainer} {
          img {
            transform: scale(1.1);
            filter: blur(0.2rem);
            -webkit-filter: blur(0.2rem);
          }
          svg {
            top: 50%;
            right: 50%;
            transform: translate(50%, -50%) scale(2);
          }
          a {
            opacity: 1;
          }
        }
      }
    `}

  @media (max-width: 460px) {
    transform: translateY(none);

    ${ImageContainer} {
      transform: scale(1);
    }
  }
`

export const TagsContainer = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors['base-span']};
  font-size: ${({ theme }) => theme.textSizes['components-link']};
  height: 1.5rem;

  li {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 0.5rem;
    &:not(:last-of-type)::after {
      content: '.';
      font-size: 2.5rem;
      margin-bottom: 1.3rem;
      margin-left: 0.5rem;
    }
  }
`

export const ExternalLink = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: ${({ theme }) => theme.colors['brand-blue']};
  border: 1px solid ${({ theme }) => theme.colors['base-post']};

  margin: 0.5rem auto 0;

  svg {
    width: 0.7031rem;
    height: 0.7031rem;
    margin-left: 0.3rem;
  }

  &:hover {
    border-bottom: 1px solid ${({ theme }) => theme.colors['brand-blue']};
    transition: 0.2s;
  }
`

export const ProjectDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0.5rem 1.5rem 1.5rem;

  strong {
    font-size: ${({ theme }) => theme.textSizes['title-title-m']};
    color: ${({ theme }) => theme.colors['base-title']};
    line-height: 160%;
    margin-bottom: 0.6rem;
  }
  p {
    font-size: ${({ theme }) => theme.textSizes['text-text-m']};
  }
`
