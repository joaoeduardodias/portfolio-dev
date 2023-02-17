import { Header } from '@/components/Header'
import { ListProjects } from '@/components/ListProjects'
import {
  ExternalLink,
  HomeContainer,
  InfoContainer,
  InfoContent,
  ListInfos,
} from '@/styles/pages/home'
import Head from 'next/head'
import Image from 'next/image'
import { DiGitBranch } from 'react-icons/di'
import { FaBuilding, FaExternalLinkAlt, FaGithub } from 'react-icons/fa'
import imgProfile from '../assets/perfil.png'
export default function Home() {
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
            alt="Foto com o rosto do desenvolvedor front-end João Dias"
          />
          <InfoContent>
            <div>
              <h1>João Dias</h1>
              <ExternalLink>
                <a
                  href="https://github.com/joaoeduardodias"
                  target="_blank"
                  rel="noreferrer"
                >
                  github
                </a>
                <FaExternalLinkAlt />
              </ExternalLink>
            </div>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione
              cupiditate pariatur nobischitecto aperiam enim quibusdam
              reiciendis praesentium officiis animi.
            </p>

            <ListInfos>
              <li>
                <FaGithub />
                <span>joaoeduardodias</span>
              </li>
              <li>
                <FaBuilding />
                <span>Freelancer</span>
              </li>
              <li>
                <DiGitBranch />
                <span>500 commits</span>
              </li>
            </ListInfos>
          </InfoContent>
        </InfoContainer>
        {/* aqui deve ficar o container de tecnologias */}

        <ListProjects />
      </HomeContainer>
    </>
  )
}
