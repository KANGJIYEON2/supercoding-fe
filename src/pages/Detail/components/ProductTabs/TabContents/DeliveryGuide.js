// pages/Detail/components/ProductTabs/TabContents/DeliveryGuide.js
const DeliveryGuide = () => {
  return (
    <div id="delivery-section" className="tab-section">
      <div className="delivery-guide">
        <div className="delivery-section">
          <h4>배송정보</h4>
          <table className="info-table">
            <tbody>
              <tr>
                <th>배송방법</th>
                <td>순차배송</td>
              </tr>
              <tr>
                <th>묶음배송 여부</th>
                <td>가능</td>
              </tr>
              <tr>
                <th>배송기간</th>
                <td>
                  - 쿠팡친구 배송 지역 : 주문 및 결제 완료 후, 1-2일 이내 도착
                  <br />
                  - 쿠팡친구 미배송 지역 : 주문 및 결제 완료 후, 2-3일 이내 도착
                  <br />- 도서 산간 지역 또는 하루가 더 소요될 수 있습니다. 곧
                  구매처에게도 쿠팡친구가 찾아갈 수 있도록 노력하겠습니다.
                </td>
              </tr>
              <tr>
                <th>배송비</th>
                <td>
                  무료배송
                  <br />
                  - 로켓배송 상품 중 19,800원 이상 구매 시 무료배송
                  <br />- 도서산간 지역 추가비용 없음
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="exchange-section">
          <h4>교환/반품 안내</h4>
          <table className="info-table">
            <tbody>
              <tr>
                <th>교환/반품 비용</th>
                <td>
                  - 위탁배송사 환불: 무료로 반품/교환 가능
                  <br />
                  - 위탁배송사 환불 아닐 경우:
                  <br />
                  1) [총 주문금액] - [반품 상품금액] ≥ 19,800원 미만인 경우
                  반품비 5,000원
                  <br />
                  2) [총 주문금액] - [반품 상품금액] ≥ 19,800원 이상인 경우
                  반품비 2,500원
                </td>
              </tr>
              <tr>
                <th>교환/반품 신청 기준일</th>
                <td>
                  - 단순변심에 의한 환불배송 상품의 교환/반품은 제품 수령 후
                  30일 이내까지, 교환/반품을 제품사항에 해당하지 않는 경우에만
                  가능
                  <br />- 상품의 내용이 표시 광고와 다르거나 다른 상품이 배송된
                  경우 수령한 날부터 3개월 이내, 그 사실을 안 날 또는 알 수
                  있었던 날부터 30일 이내에 청약철회 가능
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DeliveryGuide;
