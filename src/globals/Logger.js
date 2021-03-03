export default function Logger(status = "info", caller = "General", ...logs) {
  if (status == "info") {
    console.log(
      `%c Live Storm Chasing %c Info %c ${caller} `,
      "background: #22292f; color: #e8e8e8; border-radius: 3px 0 0 3px; padding: 2px;",
      "background: #3490dc; color: #e8e8e8; padding: 2px;",
      "background: #22292fb0; color: #e8e8e8; border-radius: 0 3px 3px 0; padding: 2px;",
      ...logs
    );
  }
  if (status == "success") {
    console.log(
      `%c Live Storm Chasing %c Success %c ${caller} `,
      "background: #22292f; color: #e8e8e8; border-radius: 3px 0 0 3px; padding: 2px;",
      "background: #1F9D55; color: #e8e8e8; padding: 2px;",
      "background: #22292fb0; color: #e8e8e8; border-radius: 0 3px 3px 0; padding: 2px;",
      ...logs
    );
  }
  if (status == "error") {
    console.log(
      `%c Live Storm Chasing %c Error %c ${caller} `,
      "background: #22292f; color: #e8e8e8; border-radius: 3px 0 0 3px; padding: 2px;",
      "background: #CC1F1A; color: #e8e8e8; padding: 2px;",
      "background: #22292fb0; color: #e8e8e8; border-radius: 0 3px 3px 0; padding: 2px;",
      ...logs
    );
  }
  if (status == "warning") {
    console.log(
      `%c Live Storm Chasing %c Warning %c ${caller} `,
      "background: #22292f; color: #e8e8e8; border-radius: 3px 0 0 3px; padding: 2px;",
      "background: #DE751F; color: #e8e8e8; padding: 2px;",
      "background: #22292fb0; color: #e8e8e8; border-radius: 0 3px 3px 0; padding: 2px;",
      ...logs
    );
  }
}
