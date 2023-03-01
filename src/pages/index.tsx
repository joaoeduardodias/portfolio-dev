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
import { SiNextdotjs, SiStyledcomponents } from 'react-icons/si'
import imgProfile from '../assets/perfil.png'

interface HomeProps {
  projects: {
    id: string
    title: string
    description: string
    image: string
    link_web?: string
    link_github: string
  }[]
}

export default function Home({ projects }: HomeProps) {
  return (
    <>
      <Head>
        <title>Home | Portfólio</title>
        <meta name="description" content="Generated by create next app" />
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
        </TechnologiesContainer>

        <ListProjects projects={projects} />

        <FormContact id="contact" />
      </HomeContainer>
      <Footer>Criado por João Dias | 2023</Footer>
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
    }
  })
  return {
    props: {
      projects: formattedProjects,
    },
    revalidate: 1 * 60 * 60 * 24 * 1, // 1 day
  }
}
