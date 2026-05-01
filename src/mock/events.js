export const events = [
  {
    type: "run_started",
    query: "Analyse Apple R&D intensity",
  },

  {
    type: "agent_thought",
    thought: "Breaking into Apple + peers analysis...",
  },

  {
    type: "task_spawned",
    task_id: "t_001",
    label: "Fetch Apple data",
    agent: "fetcher",
  },

  {
    type: "tool_call",
    task_id: "t_001",
    tool: "sec_api",
    input_summary: "Fetch Apple filings",
  },

  {
    type: "partial_output",
    task_id: "t_001",
    content: "Apple R&D grew...",
    is_final: false,
  },

  {
    type: "partial_output",
    task_id: "t_001",
    content: "Apple R&D grew 80%",
    is_final: true,
  },

  {
    type: "task_update",
    task_id: "t_001",
    status: "complete",
  },

  // parallel
  {
    type: "task_spawned",
    task_id: "t_002",
    label: "Fetch Microsoft",
    agent: "fetcher",
    parallel_group: "g1",
  },
  {
    type: "task_spawned",
    task_id: "t_003",
    label: "Fetch Google",
    agent: "fetcher",
    parallel_group: "g1",
  },

  {
    type: "task_update",
    task_id: "t_002",
    status: "running",
  },

  {
    type: "task_update",
    task_id: "t_003",
    status: "failed",
  },

  {
    type: "task_update",
    task_id: "t_003",
    status: "running",
  },

  {
    type: "task_update",
    task_id: "t_003",
    status: "cancelled",
    reason: "sufficient_data",
  },

  {
    type: "run_complete",
    output: {
      summary: "Apple R&D increased significantly compared to peers...",
    },
  },
];