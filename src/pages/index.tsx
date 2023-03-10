import { FormContact } from '@/components/FormContact'
import { Header } from '@/components/Header'
import { ListProjects } from '@/components/ListProjects'
import { getPrismicClient } from '@/services/prismic'
import {
  ButtonGithub,
  ButtonLinkedin,
  ButtonMail,
  ButtonWhatsapp,
  Footer,
  HomeContainer,
  InfoContainer,
  InfoContent,
  ListInfos,
  TechnologiesContainer,
  Technology,
} from '@/styles/pages/home'
import { GetStaticProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaNodeJs,
  FaReact,
  FaWhatsapp,
} from 'react-icons/fa'
import {
  SiChakraui,
  SiNextdotjs,
  SiSass,
  SiStyledcomponents,
} from 'react-icons/si'
import imgLogo from '../assets/logo_portfolio.svg'
import imgProfile from '../assets/perfil.png'

interface HomeProps {
  projects: {
    id: string
    title: string
    description: string
    image: string
    link_web?: string
    link_github: string
    technologies: string[]
  }[]
}

export default function Home({ projects }: HomeProps) {
  return (
    <>
      <Head>
        <title>Home | Portfólio</title>
        <meta
          name="description"
          content="portfólio do desenvolvedor web joão Dias, criado com NextJS, ReactJS.
            Portfólio criado para mostrar alguns conhecimentos e projetos desenvolvidos com a stack Javascript e Typescript."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <HomeContainer>
        <InfoContainer>
          <Image
            src={imgProfile}
            width={148}
            height={148}
            alt="Foto de perfil do desenvolvedor front-end João Dias"
            loading="lazy"
          />
          <InfoContent>
            <h1>João Dias</h1>

            <p>
              <strong>
                Desenvolvedor front-end ReactJS | NextJS | Typescript.
              </strong>
              <br />
              Apaixonado por tecnologia, gosto de criar coisas novas, e quero
              contribuir na transformação do mundo! <br /> Veja abaixo os meus
              conhecimentos e alguns projetos criados por mim!
            </p>

            <ListInfos>
              <ButtonMail>
                <Link href="/#contact" scroll={false}>
                  <FaEnvelope />
                  <span>E-mail</span>
                </Link>
              </ButtonMail>
              <ButtonLinkedin>
                <Link
                  href="https://www.linkedin.com/in/devjoaodias"
                  target="_blank"
                >
                  <FaLinkedin />
                  <span>Linkedin</span>
                </Link>
              </ButtonLinkedin>
              <ButtonGithub>
                <Link href="https://github.com/joaoeduardodias" target="_blank">
                  <FaGithub />
                  <span>GitHub</span>
                </Link>
              </ButtonGithub>
              <ButtonWhatsapp>
                <Link
                  href="https://wa.me/5567998908771?text=Ol%C3%A1%2C+vim+pelo+seu+portf%C3%B3lio+e+gostaria+de+saber+mais+sobre+voc%C3%AA%21"
                  target="_blank"
                >
                  <FaWhatsapp />
                  <span>Whatsapp</span>
                </Link>
              </ButtonWhatsapp>
            </ListInfos>
          </InfoContent>
        </InfoContainer>
        <TechnologiesContainer>
          <h2>Conhecimentos</h2>
          <Technology>
            <FaReact />
            <h3>ReactJS</h3>
          </Technology>
          <Technology>
            <SiNextdotjs />
            <h3>NextJS</h3>
          </Technology>
          <Technology>
            <FaNodeJs />
            <h3>NodeJS</h3>
          </Technology>
          <Technology>
            <SiStyledcomponents />
            <h3>Styled-components</h3>
          </Technology>
          <Technology>
            <SiSass />
            <h3>Sass</h3>
          </Technology>
          <Technology>
            <SiChakraui />
            <h3>Chakra UI</h3>
          </Technology>
        </TechnologiesContainer>

        <ListProjects projects={projects} />

        <FormContact id="contact" />
      </HomeContainer>
      <Footer>
        <div>
          <p>
            Copyright © 2023 <strong>devjoaodias.com</strong>. Todos os direitos
            reservados.
          </p>
          <p>
            Powered by{' '}
            <Image src={imgLogo} width={30} height={30} alt="" loading="lazy" />{' '}
          </p>
        </div>
      </Footer>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient()

  const data = await prismic.getAllByType('projec')
  const formattedProjects = data.map((project) => {
    return {
      id: project.id,
      title: project.data.title,
      description: project.data.description,
      image: project.data.image.url,
      link_web: project.data.link_web.url ? project.data.link_web.url : null,
      link_github: project.data.link_github.url,
      technologies: project.data.techs.map(
        (item: { tech: string }) => item.tech,
      ),
    }
  })
  return {
    props: {
      projects: formattedProjects,
    },
    revalidate: 1 * 60 * 60 * 24 * 1, // 1 day
  }
}
