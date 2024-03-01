module.exports = {
    extends: ["@commitlint/config-conventional"],
    rules: {
        "type-enum": [
            2,
            "always",
            ["add", "edit", "cut", "fix", "test", "bump", "make", "refactor", "reformat", "optimize", "document", "deploy"],
        ],
        "subject-case": [2, "always", "sentence-case"],
        "subject-empty": [2, "never"],
        "subject-max-length": [2, "always", 50],
    },
}
