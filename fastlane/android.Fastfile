platform :android do
  desc 'Clean Android project.'
  private_lane :clean do
    gradle(task: 'clean', project_dir: 'android/')
  end

  desc 'Build the Android application.'
  private_lane :build do
    clean
    gradle(
      task: 'assemble',
      build_type: 'Release',
      project_dir: 'android/'
    )
  end

  desc "Runs all the tests"
  lane :test do
    clean
    gradle(task: "test")
  end

  desc "Deploy a new version to the Google Play"
  lane :deploy do
    clean
    gradle(task: "assembleRelease")
    upload_to_play_store
  end
end
