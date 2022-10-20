import { Col, Row } from "react-bootstrap"
import { StoreItem } from "../components/StoreItem"
import storeItem from "../data/items.json"

export const Store = () => {
  return (
    <>
      <div>Store</div>
      <Row xs={1} md={2} lg={3} className="g-3">
        {storeItem.map((item) => (
          <Col key={item.id}>
            <StoreItem {...item} />
          </Col>
        ))}
      </Row>
    </>
  )
}
