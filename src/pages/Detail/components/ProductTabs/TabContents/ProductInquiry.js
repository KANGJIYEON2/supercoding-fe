// pages/Detail/components/ProductTabs/TabContents/ProductInquiry.js
const ProductInquiry = () => {
  const inquiries = [
    {
      type: "질문",
      option: "300ml | 40개",
      author: "예프**",
      date: "2024/11/03 19:33:46",
      content:
        "배송받았고 되었는데\n배송완료라고 되었는데\n아직 배송안됐네요\n며칠이후로받나요 이런적없었었는데요\n아영물류라구요\n일미로컨택송신한 카톡답좀받았고\n불은한데요",
      isAnswer: false,
    },
    {
      type: "답변",
      author: "예프**",
      date: "2024/11/03 22:24:42",
      content:
        "안녕하세요 고객님 지하철에서는 주문하호가 확인되시지 않으신다. 죄송 로갯배송으로 주문하셨으면 고객센터로 문의부탁드립니다. 감사합니다.",
      isAnswer: true,
    },
    {
      type: "질문",
      option: "1.5L | 6개 공부",
      date: "2024/10/27 13:15:21",
      content:
        "예장 배송왔는데 나뿐 농아서 처도 신청을 했고, 민족 한글 상태로 받았지만있네다. 그런데 이후 상품이 매송이 되었습니다. 어떤 절차가 필요할까요?",
      isAnswer: false,
    },
  ];

  return (
    <div id="inquiry-section" className="tab-section">
      <div className="inquiry-notice">
        <h3>상품문의</h3>
        <ul className="notice-list">
          <li>
            구매한 상품의 취소/반품은 마이쿠팡 구매내역에서 신청 가능합니다.
          </li>
          <li>
            상품문의 및 후기게시판을 통해 취소된 환불 민원 등은 처리되지
            않습니다.
          </li>
          <li>
            가격, 판매자, 교환/환불 및 배송 등 해당 상품 자체와 관련 없는 문의는
            고객센터 내 1:1문의하기를 이용해주세요.
          </li>
          <li>
            해당 상품 자체와 관련없는 글, 양도, 광고성, 욕설, 비방, 도배 등의
            글은 예고 없이 이동, 노출제한, 삭제 등의 조치가 취해질 수 있습니다.
          </li>
          <li>
            공개 게시판이므로 전화번호, 메일 주소 등 개인정보가 노출되지 않도록
            주의해주세요.
          </li>
        </ul>
      </div>

      <div className="inquiry-list">
        {inquiries.map((inquiry, index) => (
          <div
            key={index}
            className={`inquiry-item ${inquiry.isAnswer ? "answer" : ""}`}
          >
            <div className="inquiry-header">
              <span className="inquiry-type">{inquiry.type}</span>
              {inquiry.option && (
                <span className="inquiry-option">{inquiry.option}</span>
              )}
              <span className="inquiry-date">{inquiry.date}</span>
            </div>
            <div className="inquiry-content">{inquiry.content}</div>
          </div>
        ))}
      </div>

      <div className="inquiry-footer">
        <button className="show-more">전체보기 ∨</button>
        <button className="write-inquiry">문의하기</button>
      </div>
    </div>
  );
};

export default ProductInquiry;
