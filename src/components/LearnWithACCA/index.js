import Header from '../Header'
import {
  LearnWithACCAContainer,
  ResponsiveContainer,
  LearnWithACCAListContainer,
  ItemInsideHeader,
  ItemInsideFooter,
  LearnWithACCAHeading,
  LearnWithACCAListItem,
  LearnWithACCAWrapListContainer,
  ItemInsideAnotherListItems,
  ItemInsideAnotherListItem,
} from './styledComponents'

const LearnWithACCA = () => (
  <>
    <Header />
    <LearnWithACCAContainer>
      <ResponsiveContainer>
        <LearnWithACCAHeading>
          What will you Learn in ACCA?
        </LearnWithACCAHeading>

        <LearnWithACCAListContainer>
          <LearnWithACCAWrapListContainer>
            <ItemInsideHeader>Knowledge Level</ItemInsideHeader>
            <LearnWithACCAListItem>
              <ItemInsideAnotherListItems>
                <ItemInsideAnotherListItem>
                  Equipments and Technologies
                </ItemInsideAnotherListItem>
                <ItemInsideAnotherListItem>
                  Management consultant
                </ItemInsideAnotherListItem>
                <ItemInsideAnotherListItem>
                  Freelancing Accounting
                </ItemInsideAnotherListItem>
              </ItemInsideAnotherListItems>
            </LearnWithACCAListItem>
            <ItemInsideFooter>3 Papers</ItemInsideFooter>
          </LearnWithACCAWrapListContainer>
          <LearnWithACCAWrapListContainer>
            <ItemInsideHeader>Skills Level</ItemInsideHeader>
            <LearnWithACCAListItem>
              <ItemInsideAnotherListItems>
                <ItemInsideAnotherListItem>
                  Foundation Level
                </ItemInsideAnotherListItem>
                <ItemInsideAnotherListItem>
                  Intermediate Level
                </ItemInsideAnotherListItem>
                <ItemInsideAnotherListItem>
                  Advanced Level
                </ItemInsideAnotherListItem>
              </ItemInsideAnotherListItems>
            </LearnWithACCAListItem>
            <ItemInsideFooter>3 Papers</ItemInsideFooter>
          </LearnWithACCAWrapListContainer>
          <LearnWithACCAWrapListContainer>
            <ItemInsideHeader>Professional Level</ItemInsideHeader>
            <LearnWithACCAListItem>
              <ItemInsideAnotherListItems>
                <ItemInsideAnotherListItem>
                  Certification Readiness
                </ItemInsideAnotherListItem>
                <ItemInsideAnotherListItem>
                  Advanced Knowledge
                </ItemInsideAnotherListItem>
                <ItemInsideAnotherListItem>
                  Career Advancement
                </ItemInsideAnotherListItem>
                <ItemInsideAnotherListItem>
                  Recognition
                </ItemInsideAnotherListItem>
              </ItemInsideAnotherListItems>
            </LearnWithACCAListItem>
            <ItemInsideFooter>4 Papers</ItemInsideFooter>
          </LearnWithACCAWrapListContainer>
        </LearnWithACCAListContainer>
      </ResponsiveContainer>
    </LearnWithACCAContainer>
  </>
)

export default LearnWithACCA
