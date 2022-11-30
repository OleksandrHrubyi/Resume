import React, { Suspense } from 'react'
import ProviderWrapper from './ProviderWrapper'
import { AppContextProvider } from './Context'
import Container from '../components/container/Container'
import Main from './Main/Main'
import Section from '../components/Section/Section'
import MainInfo from '../components/MainInfo/MainInfo'
import SectionInfo from '../components/SectionInfo/SectionInfo'
import Experience from '../components/Experience/Experience'
import Education from '../components/Education/Education'
// import Projects from "../components/Projects/Projects";
import Header from '../components/Header/Header'
//import TextInfo from '../components/Textinfo/TextInfo'

export default function App() {
  return (
    <>
      <AppContextProvider>
        <Suspense fallback={<p>Loading...</p>}>
          <ProviderWrapper>
            <Container>
              <SectionInfo>
                <header>
                  <Header />
                  <MainInfo />
                </header>
                <main>
                  {/* <section>
                    <TextInfo />
                  </section> */}
                  {/* <section>
                    <Projects />
                  </section> */}
                  <section>
                    <Experience />
                  </section>
                  <section>
                    <Education />
                  </section>
                </main>
              </SectionInfo>
              <Section>
                <Main />
              </Section>
            </Container>
          </ProviderWrapper>
        </Suspense>
      </AppContextProvider>
    </>
  )
}
