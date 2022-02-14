<?php

namespace Tests;

class CopyPluginAssetsTest extends TestCase
{
    public function testHandle()
    {
        $plugin = new \App\Services\Plugin('/path', ['name' => 'fake']);

        $this->partialMock(\Illuminate\Filesystem\Filesystem::class, function ($mock) {
            $dir = public_path('plugins/fake');
            $mock->shouldReceive('deleteDirectory')
                ->with($dir)
                ->once();
            $mock->shouldReceive('copyDirectory')
                ->withArgs(['/path'.DIRECTORY_SEPARATOR.'assets', $dir.'/assets'])
                ->once();
        });

        event('plugin.versionChanged', [$plugin]);
    }
}
