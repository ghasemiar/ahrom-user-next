"use client";

import React from "react";

const CommentsForm: React.FC = () => {
  return (
    <>
      <div className="comment-respond">
        <h3 className="comment-reply-title">یک کامنت بزارید</h3>

        <form className="comment-form" onSubmit={(e) => e.preventDefault()}>
          <div className="comment-notes">
            <span id="email-notes">آدرس ایمیل شما منتشر نخواهد شد.</span>
            <br />
            فیلدهای الزامی مشخص شده اند <span className="required">*</span>
          </div>

          <div className="comment-form-comment mb-3">
            <label>متن کامنت</label>
            <textarea name="comment" id="comment" rows={5} required></textarea>
          </div>

          <div className="comment-form-author mb-3">
            <label>
              نام <span className="required">*</span>
            </label>
            <input type="text" id="author" name="author" required />
          </div>

          <div className="comment-form-email mb-3">
            <label>
              آدرس ایمیل <span className="required">*</span>
            </label>
            <input type="email" id="email" name="email" required />
          </div>

          <div className="comment-form-url mb-3">
            <label>وبسایت</label>
            <input type="url" id="url" name="url" />
          </div>

          <div className="comment-form-cookies-consent mb-3">
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="exampleCheck1"
              />
              <label className="form-check-label" htmlFor="exampleCheck1">
                برای دفعه بعد که نظر می دهم نام، ایمیل و وب سایت من را در این
                مرورگر ذخیره کنید.
              </label>
            </div>
          </div>

          <div className="form-submit">
            <input
              type="submit"
              name="submit"
              id="submit"
              className="submit"
              value="ارسال کامنت"
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default CommentsForm;
